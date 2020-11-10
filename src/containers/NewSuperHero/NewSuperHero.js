import React, { useState } from "react";
import { Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { submitDataNewSuperHero } from "../../redux/actions/action";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../utils/utility";
import "../../asset/sass/components/super-hero-new.scss";
import { Modal } from "antd";

const NewSuperHero = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector((state) => state.isLoading);
  const [superForm, setSuperForm] = useState({
    image: {
      elementType: "input",
      label: "Image Super Hero Link",
      elementConfig: {
        type: "text",
        placeholder: "Image Link",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    name: {
      elementType: "input",
      label: "Name Super Hero",
      elementConfig: {
        type: "text",
        placeholder: "Name Super Hero",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    fullName: {
      elementType: "input",
      label: "Full Name",
      elementConfig: {
        type: "text",
        placeholder: "Full Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    placeOfBirth: {
      elementType: "input",
      label: "Place Of Birth",
      elementConfig: {
        type: "text",
        placeholder: "Place Of Birth",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    eyeColor: {
      elementType: "input",
      label: "Eye Color",
      elementConfig: {
        type: "text",
        placeholder: "Eye Color",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    hairColor: {
      elementType: "input",
      label: "Hair Color",
      elementConfig: {
        type: "text",
        placeholder: "Hair Color",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    height: {
      elementType: "input",
      label: "Height",
      elementConfig: {
        type: "text",
        placeholder: "Height",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    weight: {
      elementType: "input",
      label: "Weight",
      elementConfig: {
        type: "text",
        placeholder: "Weight",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    gender: {
      elementType: "select",
      label: "Gender",
      elementConfig: {
        options: [
          { value: "male", displayValue: "Male" },
          { value: "female", displayValue: "Female" },
        ],
      },
      value: "male",
      validation: {
        required: true,
      },
      valid: true,
    },
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const onFinish = () => {
    const {
      image,
      fullName,
      name,
      gender,
      eyeColor,
      hairColor,
      weight,
      height,
      placeOfBirth,
    } = superForm;
    const newSuperHero = {
      name: name.value,
      images: {
        md: image.value,
      },
      appearance: {
        gender: gender.value,
        height: [0, height.value],
        weight: [0, weight.value],
        eyeColor: eyeColor.value,
        hairColor: hairColor.value,
      },
      biography: {
        fullName: fullName.value,
        placeOfBirth: placeOfBirth.value,
      },
    };

    dispatch(
      submitDataNewSuperHero(newSuperHero, () => {
        Modal.success({
          content: "Success",
          onOk: () => {
            history.push("/");
          },
        });
      }),
    );
  };

  const onReset = () => {
    history.push("/");
  };

  const inputChangedHandler = (value, id) => {
    const updatedFormElement = updateObject(superForm[id], {
      value,
      valid: checkValidity(value, superForm[id].validation),
      touched: true,
    });
    const updatedSuperForm = updateObject(superForm, {
      [id]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedSuperForm) {
      formIsValid = updatedSuperForm[inputIdentifier].valid && formIsValid;
    }

    setSuperForm(updatedSuperForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in superForm) {
    formElementsArray.push({
      id: key,
      ...superForm[key],
    });
  }

  return (
    <Spin spinning={isLoading}>
      <div className="create-new-page">
        <div className="row">
          <h1 className="title">Create new super hero</h1>
          <div>
            {/* <div className="input-avatar">
                      <label>
                        <span>upload image</span>
                        <input type="file" id="form-avatar" name="avatar" accept="image/png, image/jpeg, image/gif" />
                      </label>
                    </div> */}
            {formElementsArray.map((field) => (
              <Input
                key={field.id}
                label={field.label}
                type={field.elementType}
                elementConfig={field.elementConfig}
                value={field.value}
                invalid={!field.valid}
                shouldValidate={field.validation}
                touched={field.touched}
                changed={(event) =>
                  inputChangedHandler(event.target.value, field.id)
                }
              />
            ))}
            <div className="button-section">
              <Button
                type="primary"
                labelButton="Submit"
                onClick={onFinish}
                isDisabled={!formIsValid}
              />
              <Button labelButton="Cancel" onClick={onReset} />
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default NewSuperHero;
