import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import DxcCheckbox from "../checkbox/Checkbox.jsx";

import DxcRequired from "../common/RequiredComponent.jsx";

import "../common/OpenSans.css";
import colors from "../common/variables.js"

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "210px"
  },
  dropdownStyle: {
    boxShadow: "0px 8px 10px 0px rgba(217,217,217,1)",
    minWidth: "210px !important"
  },
  itemList: {
    color: colors.darkGrey,
    "&.MuiList-padding": {
      paddingTop: "10px",
      paddingBottom: "10px"
    },
    "& li": {
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingRight: "20px",
      paddingLeft: "20px",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: colors.darkWhite,
        color: colors.darkGrey
      },
      "&:active": {
        backgroundColor: colors.lightGrey,
        color: colors.black
      },
      "&.Mui-selected": {
        backgroundColor: colors.lightGrey,
        color: colors.black
      }
    }
  }
}));

const DxcSelect = ({
  value,
  name,
  onChange,
  label,
  required,
  disabled,
  options,
  theme = "light",
  disableRipple = false,
  iconPosition = "after",
  multiple = false
}) => {
  const [selectedValue, setSelectedValue] = (multiple && useState([])) || useState("");
  const classes = useStyles();

  const handleSelectChange = selectedOption => {
    if (multiple) {
      setSelectedValue(selectedOption.target.value);
      onChange(selectedOption.target.value);
    } else {
      setSelectedValue(selectedOption.target.value);
      onChange(selectedOption.target.value);
    }
  };

  const getLabelForSingleSelect = selected => {
    const selectedItem = options.filter(option => option.value === selected)[0];
    return (
      <SelectedIconContainer iconPosition={iconPosition} multiple={multiple}>
        {selectedItem.iconSrc && <ListIcon src={selectedItem.iconSrc} />}{" "}
        {selectedItem.label && (
          <SelectedLabelContainer iconPosition={iconPosition} theme={theme} disabled={disabled}>
            {selectedItem.label}
          </SelectedLabelContainer>
        )}
      </SelectedIconContainer>
    );
  };
  const getSelectedValuesWithLabel = (optionsList, selected) => {
    return optionsList
      .filter(x => selected.includes(x.value))
      .map(optionToRender => optionToRender.label)
      .join(", ");
  };

  const getSelectedValuesWithIcons = (optionsList, selected) => {
    return options
      .filter(x => selected.includes(x.value))
      .map(optionToRender => getLabelForSingleSelect(optionToRender.value));
  };

  const labelForMultipleSelect = selected => {
    return options.findIndex(option => !option.label) !== -1
      ? getSelectedValuesWithIcons(options, selected)
      : getSelectedValuesWithLabel(options, selected);
  };
  const getRenderValue = selected => {
    return (multiple && labelForMultipleSelect(selected)) || getLabelForSingleSelect(selected);
  };
  const isChecked = (checkedValue, option) => {
    return (checkedValue && checkedValue.findIndex(element => element === option.value) !== -1) || false;
  };

  return (
    <SelectContainer theme={theme}>
      <LabelContainer theme={theme} disabled={disabled}>
        {required && <DxcRequired theme={theme} />}
        {label}
      </LabelContainer>
      <Select
        name={name}
        theme={theme}
        multiple={multiple}
        renderValue={getRenderValue}
        onChange={handleSelectChange}
        value={(value && value.length && value) || selectedValue}
        disabled={disabled}
        MenuProps={{
          classes: { paper: classes.dropdownStyle, list: classes.itemList }
        }}
      >
        {options.map(option => {
          return (
            <MenuItem value={option.value} disableRipple={disableRipple}>
              {multiple && <DxcCheckbox disableRipple={true} checked={isChecked(selectedValue, option)} />}
              <OptionContainer iconPosition={iconPosition}>
                {option.iconSrc && <ListIcon src={option.iconSrc} iconPosition={iconPosition} />}{" "}
                <span>{option.label}</span>
              </OptionContainer>
            </MenuItem>
          );
        })}
      </Select>
    </SelectContainer>
  );
};
const SelectedIconContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.iconPosition === "before" && "row") || "row-reverse"};
  justify-content: ${props => (props.iconPosition === "before" && "flex-start") || "flex-end"};
  margin-right: ${props => (props.multiple && "15px") || "0px"};
  &::before {
    content: '${props => (props.iconPosition === "after" && ",") || ""}'; 
    margin: 0 4px;
  }
  &::after {
    content: '${props => (props.iconPosition === "before" && ",") || ""}'; 
    margin: 0 4px;
  }
`;
const SelectedLabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  margin-left: ${props => (props.iconPosition === "after" && "0px") || "10px"};
  margin-right: ${props => (props.iconPosition === "before" && "0px") || "10px"};
`;
const OptionContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.iconPosition === "before" && "row") || "row-reverse"};
`;

const ListIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  width: 20px;
  height: 20px;
  margin-left: ${props => (props.iconPosition === "after" && "10px") || "0px"};
  margin-right: ${props => (props.iconPosition === "before" && "10px") || "0px"};
`;

const SelectContainer = styled.div`
  display: inline-flex;
  align-items: center;
  .MuiSelect-select {
    min-width: 230px;
    width: 230px;
    display: flex;
    color: ${props => (props.theme === "dark" ? colors.white : colors.black)};

    :focus {
      background-color: transparent;
    }
    & > *:last-child::after {
      content: unset;
    }
    & > *:not(:last-child)::after {
      content: ",";
    }
  }
  .MuiInputBase-root {
    min-height: 34px;
    width: 230px;
    min-width: 230px;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
  .MuiSelect-icon {
    color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  }
`;
const LabelContainer = styled.span`
  font-family: "Open Sans", sans-serif;
  color: ${props => (props.theme === "dark" ? colors.white : colors.black)};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
`;

DxcSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  disableRipple: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
  iconPosition: PropTypes.oneOf(["after", "before"]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any.isRequired,
      iconSrc: PropTypes.string
    })
  )
};

export default DxcSelect;