import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";
import "../common/OpenSans.css";
import colors from "../common/variables.js"

const DxcInputText = ({
  label = "",
  name = "",
  value = "",
  theme = "light",
  assistiveText = "",
  disabled = false,
  prefix = "",
  sufix = "",
  prefixIconSrc = "",
  sufixIconSrc = "",
  onClickIcon = "",
  onChange = "",
  onBlur = "",
  error = false,
  required = false,
  multiline = false
}) => {
  const [innerValue, setInnerValue] = useState("");

  const handlerInputChange = event => {
    setInnerValue(event.target.value);
    onChange(event.target.value);
  };
  const handlerInputBlur = event => {
    setInnerValue(event.target.value);
    onBlur(event.target.value);
  };

  return (
    <TextContainer
      prefixIconSrc={prefixIconSrc}
      prefix={prefix}
      required={required}
      theme={theme}
      multiline={multiline}
    >
      {prefixIconSrc && !multiline && <PrefixIcon src={prefixIconSrc} disabled={disabled} onClick={onClickIcon} />}
      {prefix && !multiline && (
        <PrefixLabel theme={theme} disabled={disabled}>
          {prefix}
        </PrefixLabel>
      )}
      <TextField
        error={error}
        value={value || innerValue}
        name={name}
        multiline={multiline}
        disabled={disabled}
        label={label}
        helperText={assistiveText}
        onChange={handlerInputChange}
        onBlur={handlerInputBlur}
        rowsMax="4"
        InputProps={{
          endAdornment: (sufix || sufixIconSrc) && (
            <InputAdornment position="end">
              {(sufixIconSrc && !multiline && (
                <SufixIcon disabled={disabled} src={sufixIconSrc} onClick={onClickIcon} />
              )) ||
                (!multiline && sufix)}
            </InputAdornment>
          )
        }}
      />
    </TextContainer>
  );
};
const PrefixIcon = styled.img`
  position: absolute;
  top: 44px;
  left: 14px;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  z-index: 1;
  opacity: ${props => (props.disabled && 0.5) || 1};
`;
const PrefixLabel = styled.span`
  position: absolute;
  font-family: "Open Sans", sans-serif;
  color: ${props => (props.theme === "light" ? colors.darkGrey : colors.yellow)};
  top: 42px;
  left: 15px;
  max-height: 20px;
  max-width: 20px;
  opacity: ${props => (props.disabled && 0.5) || 1};
`;

const SufixIcon = styled.img`
  top: 23px;
  left: 0;
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  opacity: ${props => (props.disabled && 0.5) || 1};
  cursor: ${props => (props.disabled && "not-allowed") || "default"};
`;

const TextContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin: 15px;

  .MuiTextField-root {
    margin:15px;
    font-family: "Open Sans", sans-serif;
    .MuiFormHelperText-root {
      font-family: "Open Sans", sans-serif;
    }
    .MuiFormLabel-root {
      font-size: 16px;
      top: 3px;
      color: ${props => (props.theme === "light" ? colors.black : colors.lightGrey)};
      &::before {
        content:'${props => (props.required && "*") || ""}';
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        font-size: 18px; 
      }
      &.Mui-disabled{
        opacity:0.5;
      }
      padding-left: ${props => ((props.prefixIconSrc || (props.prefix && !props.multiline)) && "32px") || "inherit"};
      &.Mui-focused {
        color: ${props => (props.theme === "light" ? colors.black : colors.white)};
        &.MuiInputLabel-shrink {
          transform: ${props =>
            props.prefixIconSrc ||
            (props.prefix && "translate(8px, 1.5px) scale(0.75);") ||
            "translate(0, 1.5px) scale(0.75);"};
        }
      }
      &.Mui-disabled {
        color: ${props => (props.theme === "light" ? colors.lightGrey : colors.darkGrey)};
        cursor: not-allowed;
      }
      &.MuiInputLabel-shrink {
        font-family: "Open Sans", sans-serif;
        transform: ${props =>
          props.prefixIconSrc ||
          (props.prefix && "translate(8px, 1.5px) scale(0.75);") ||
          "translate(0, 1.5px) scale(0.75);"};
      }
      &.Mui-error {
        color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
      }

      &:not(.MuiInputLabel-shrink)  {
        font-family: "Open Sans", sans-serif;
        color: ${props => (props.theme === "light" ? colors.darkGrey : colors.lightGrey)};
        & + div, & + div + p {
          color: ${props => (props.theme === "light" ? colors.darkGrey : colors.lightGrey)};
        }
      }

      &.MuiInputLabel-shrink {
        & + div::before {
          border-color: ${props => (props.theme === "light" ? colors.black : colors.lightGrey)};
        }
        & + div + p {
          color: ${props => (props.theme === "light" ? colors.darkGrey : colors.lightGrey)};
        }
        
      }
    }
    .MuiInputBase-root.MuiInput-root.MuiInput-underline {
      font-family: "Open Sans", sans-serif;
      height: ${props => (!props.multiline ? "34px" : "auto")};
      min-width: 230px;
      min-height: 34px;
      &::before{
        border-bottom: ${props => (props.theme === "light" ? `1px solid ${colors.black}` : `1px solid ${colors.lightGrey}`)};
      }
      &:not(.Mui-error)::before, &:not(&.Mui-focused)::before {
        border-bottom: ${props => (props.theme === "light" ? `1px solid ${colors.black}` : `1px solid ${colors.lightGrey}`)};
      }

      .MuiInputBase-inputMultiline {
        overflow: auto !important;
        min-height: 76px !important;
        min-width: 230px !important;
        max-height: 100px !important;
        max-width: 726px !important;
        resize: both !important;
        ::-webkit-scrollbar {
          width: 3px;
        }

        ::-webkit-scrollbar-track {
          background-color: ${colors.lightGrey};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${colors.darkGrey};
          border-radius: 3px;
        }
      }

      &.Mui-error {
        &::before {
          border-width: 1px;
          border-color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        }
        &::after {
          transform: scaleX(0);
        }
      }

      &.Mui-focused {
        &::after {
          border-width: 2px;
          border-color: ${props => (props.theme === "light" ? colors.black : colors.white)};
          transform: scaleX(1);
        }
        
        &.Mui-error::after {
          border-color: ${props => (props.theme === "light" ? colors.darkRed : colors.lightRed)};
        }
      }

      &.Mui-disabled {
        color: ${props => (props.theme === "light" ? colors.lightGrey : colors.darkGrey)};
        opacity:0.5;
        cursor: not-allowed;
        
        &::before {
          border-bottom: ${props => (props.theme === "light" ? `1px solid ${colors.lightGrey}` : `1px solid ${colors.darkGrey}`)};
          border-bottom-style: solid;
        }
      }
      .MuiInputBase-input {
        padding-left: ${props => ((props.prefixIconSrc || (props.prefix && !props.multiline)) && "32px") || "inherit"};
        color: ${props => (props.theme === "light" ? colors.darkGrey : colors.white)};
        &.Mui-disabled {
          cursor: not-allowed;
        }
      }
      .MuiInputAdornment-root {
        height: 20px;
        color: ${props => (props.theme === "light" ? colors.lightGrey : colors.darkGrey)};
        &.MuiInputAdornment-positionEnd{
          & > p {
            font-family: "Open Sans", sans-serif;
            color:${props => (props.theme === "light" ? colors.lightGrey : colors.yellow)};
          }
        }
        &.Mui-disabled {
          cursor: not-allowed;
          opacity:0.5;
        }
      }

      &:hover:not(.Mui-disabled):before &:hover:not(.Mui-error):before{
        border-bottom: ${props => (props.theme === "light" ? `1px solid ${colors.black}` : `1px solid ${colors.white}`)};
      }
      
    }

    & > p {
      &.Mui-error {
        color: ${props => (props.theme === "light" ? colors.darkRed + " !important" : colors.lightRed + " !important")};
      }
      &.Mui-disabled{
        opacity:0.5;
        cursor:not-allowed;
      }
    }
    
  }
`;

DxcInputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", ""]),
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
  prefixIconSrc: PropTypes.string,
  sufixIconSrc: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  onClickIcon: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default DxcInputText;