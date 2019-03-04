import React, {useState, useRef} from 'react';
import styled from 'styled-components';

import { Input, Button } from '../OtherElements';

const ProfileCard = styled.div`
  padding: 10px 5px;
`;

const Flex = styled.div`
  display: flex
  flex-direction: ${props => props.column ? 'column' : 'row'};
  
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  overflow: hidden
  padding: 0 0 0 20px;
  
  @media only screen and (max-width: 500px) {
    padding: 20px 0 0 0;
  }
`;

const InputFile = styled.input`
  display: none;
`;


const Avatar = styled.div`
  background: url(${props => (props.src ? props.src : '')}) center;
  background-size: cover;
  min-width: 250px;
  height: 250px;
`;

const MarginTop = styled.div`
  margin-top: 10px;
  display:flex;
  flex-direction: column;
`;

const EditProfile = ({user, editUser}) => {
  const [firstName, setFirstName] = useState( user.firstName);
  const [lastName, setLastName] = useState( user.lastName);
  const [tel, setTel] = useState( user.tel);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState( "");
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(user.avatar);
  const inputEl = useRef(null);

  const addAvatar = (file) => {
    const reader = new FileReader();
    reader.onload = e => setAvatar(e.currentTarget.result);
    reader.readAsDataURL(file);
  };

  const onChange = () => {
    const _file = inputEl.current.files[0];
    setFile(_file);
    addAvatar(_file);
  };

  const onSubmit = e=> {
    e.preventDefault();
    editUser({
      file,
      firstName,
      lastName,
      tel,
      confirmPassword,
      password
    });
  };

  return (
    <ProfileCard>
      <Flex>
        <Flex column>
          <Avatar src={avatar}/>
          <Button type="button" noMargin onClick={() => inputEl.current.click()}>
            Выбрать
          </Button>
          <InputFile ref={inputEl} type="file" onChange={onChange} />
        </Flex>
          <ProfileInfo>
            <Input
              type="text"
              placeholder="Иван"
              title="Имя"
              value={firstName}
              onChange={e => setFirstName(e.currentTarget.value)}
              valid={true}
            />
            <Input
              type="text"
              placeholder="Иванов"
              title="Фамилия"
              value={lastName}
              onChange={e => setLastName(e.currentTarget.value)}
              valid={true}
            />
            <Input
              type="text"
              placeholder="(33) 333-33-33"
              title="Номер"
              value={tel}
              onChange={e => setTel(e.currentTarget.value)}
              valid={true}
            />
            <Input
              type="password"
              title="Новый пароль"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              valid={true}
            />
            <Input
              type="password"
              title="Пароль*"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.currentTarget.value)}
              valid={true}
            />
          </ProfileInfo>
      </Flex>
      <MarginTop>
        <Button type="button" noMargin onClick={onSubmit}>
          Сохранить
        </Button>
      </MarginTop>
    </ProfileCard>
  )
};

export default EditProfile;
