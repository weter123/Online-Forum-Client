import React, { FC, useReducer, useState} from "react";
import ReactModal from "react-modal";
import { isPasswordValid, PasswordTestResult } from "../../common/validators/PasswordValidator";

const userReducer = (state: any, action: any) => {
    switch(action.type){
        case "userName" :
            return {
                ...state,
                userName: action.payload
            };
            
        case "password":
            return {
                ...state,
                password: action.payload
            };
        case "passwordConfirm":
            return {
                ...state,
                PasswordConfirm: action.payload
            };
        case "email" :
            return {
                ...state,
                email: action.payload
            };
        case "resultMsg":
            return {
                ...state,
                resultMsg: action.payload
            };
        
            default:
                return {
                    ...state,
                    resultMsg: 'A Failure has occurred.'
                };
         }
    }

    export interface RegistrationProps {
        isOpen: boolean;
        onClickToggle: (
            e: React.MouseEvent<Element, MouseEvent>  | React.KeyboardEvent<Element>
        ) => void;
    }

    const Registration : FC<RegistrationProps> = ({ isOpen, onClickToggle}) =>{
        const [isRegisterDisabled, setRegisterDisabled,] = useState(true);
        const[{ userName,password,email, passwordConfirm,resultMsg}, dispatch] = useReducer(userReducer,{
            userName: "devac",
            password: "",
            email: "admin@szhaven.com",
             passwordConfirm: "",
             resultMsg: "",
        });

        const allowRegister = (msg: string, setDisabled: boolean) =>{
            setRegisterDisabled(setDisabled);
            dispatch({type: "resultMsg", payload: msg});
        };

        const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({type: "userName", payload: e.target.value});
            if(!e.target.value){
                allowRegister("userName Cannot be empty", true);
            }
            else{
                allowRegister("", false);
            }
        };
        const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
            dispatch({type: "email", payload: e.target.value});
            if(!e.target.value){
                allowRegister("email Cannot be empty", true);
            }
            else{
                allowRegister("", false);
            }
        };
        const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
            dispatch({type: "Password", payload: e.target.value});
            const PasswordCheck: PasswordTestResult = isPasswordValid(e.target.value);
            if(!PasswordCheck.isValid){
                allowRegister(PasswordCheck.message, true);
                return;
            }
            passwordsSame(passwordConfirm,e.target.value);
        };
        const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) =>{
            dispatch({type: "passwordConfirm", payload: e.target.value});
            passwordsSame(passwordConfirm,e.target.value);
        };
        const passwordsSame = (passwordVal: string, passwordConfirmVal: string) =>{
            if(passwordVal !== passwordConfirmVal){
                allowRegister("Passwords do not match", true);
                return false;
            }else{
                allowRegister("", false);
                return true;
            }
        };
        const onClickRegister = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>) =>{
            e.preventDefault();
            onClickToggle(e);
        };

        const onClickCancel = ( e: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
            onClickToggle(e);
        };

        return(
            <ReactModal
            className="modal-menu"
            isOpen ={isOpen}
            onRequestClose ={onClickToggle}
            shouldCloseOnOverlayClick = {true}>
                <form>
                    <div className="req-inputs">
                        <div>
                            <label>username</label>
                            <input type ="text" value ={userName} onChange ={onChangeUserName}/>
                        </div>
                        <div>
                            <label>email</label>
                            <input type ="text" value ={email} onChange ={onChangeEmail}/>
                        </div>
                        <div>
                            <label>password</label>
                            <input type ="text" placeholder="Password" value ={password} onChange ={onChangePassword}/>
                        </div>
                        <div>
                            <label>password confirmation</label>
                            <input type ="text" placeholder="Password Confirmation" value ={passwordConfirm} onChange ={onChangePasswordConfirm}/>
                        </div>
                        <div className="req-buttons">
                            <div className="req-button-left">
                                <button
                                style={{marginLeft: ".5em"}}
                                className="action-btn"
                                disabled ={isRegisterDisabled}
                                onClick ={onClickRegister}>Register</button>
                                <button
                                style={{marginLeft: ".5em"}}
                                className="cansel-btn"
                                onClick ={onClickCancel}>Close</button>
                            </div>
                            <span className="reg-btn-right">
                                <strong>{resultMsg}</strong>
                            </span>
                        </div>
                    </div>
                </form>
            </ReactModal>
        )
    }

    export default Registration;