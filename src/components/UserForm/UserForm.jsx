

import React from 'react'

import {AddAvatarContainer, AvatarContainer, AvatarBox, Avatar, AddImageBox, AddImage, UserInfo, UserName, Position, Form, Input, Button, InputTitle, ContainerInputs, BoxAllInputs, BoxInput } from './UserForm.styled';
import user from '../../assets/icons/user.svg';
import addAvatar from '../../assets/icons/add-avatar.svg';
export const UserForm = () => {

    return (
        <>
            <AddAvatarContainer>
                <AvatarContainer>
                    <AvatarBox>
                        <Avatar src={user} alt="" />
                    </AvatarBox>
                    <AddImageBox>
                        <AddImage src={addAvatar} alt="" />
                    </AddImageBox>
                    
                </AvatarContainer>

                <UserInfo>
                    <UserName>Nadiia Doe </UserName>
                    <Position>User</Position>
                </UserInfo>                
            </AddAvatarContainer>

            <Form /*onSubmit={handleSubmit}*/>
                <BoxAllInputs>
                    <ContainerInputs>
                        <BoxInput>
                            <InputTitle>User Name</InputTitle>
                            <Input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"/>
                        </BoxInput>                    
                        
                        <BoxInput>
                            <InputTitle>Birthday</InputTitle>
                            <Input type="date" name="date" />
                        </BoxInput>
                        
                        <BoxInput>
                            <InputTitle>Email</InputTitle>
                            <Input type="email" name="email" placeholder="Your email"/>
                        </BoxInput>
                    
                    </ContainerInputs>
                    <ContainerInputs> 
                        <BoxInput>
                            <InputTitle>Phone</InputTitle>
                            <Input
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[ .-\s]?\(?\d{1,3}?\)?[ .-\s]?\d{1,4}[ .-\s]?\d{1,4}[ .-\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                //   onChange={handleNumberChange}
                                label="Number"                                
                                id="outlined-textarea"
                                placeholder="Add a phone number"
                                
                                //   value={formData.number} 
                                />
                        </BoxInput>                    
                    
                        <BoxInput>
                            <InputTitle>Skype</InputTitle>
                            <Input name="text" placeholder="Add a skype number"/>
                        </BoxInput>
                    </ContainerInputs>
                </BoxAllInputs>       
                
            </Form>
            <Button type="submit">
                Save changes
            </Button>
        </>
     

           
 
  );
};
