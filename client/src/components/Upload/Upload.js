import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import {Button} from '../OtherElements';

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-top: 50px;
`;

const MarginTop = styled.div`
  margin-top: 20px;
`;

const FormName = styled.label`
  margin-bottom: 20px;
`;

const InputFile = styled.input`
  display: none;
`;

const Upload = () => {
  const [file, setFile] = useState(null);
  const inputEl = useRef(null);

  const onChange = () => {
    const _file = inputEl.current.files[0];
    setFile(_file);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormName>Загрузка изображения</FormName>
      <Button type="button" onClick={() => inputEl.current.click()}>
        Выбрать
      </Button>
      <InputFile ref={inputEl} type="file" onChange={onChange} />
      <MarginTop>
        <Button type="submit" disabled={!file}>
          Загрузить
        </Button>
      </MarginTop>
    </Form>
  );
};

export default Upload;
