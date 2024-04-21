import React, { useState } from 'react';
import logo from '../../assets/images/silicon_logo.svg';
import './stylesheet/CompleteProfile.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';
import { TagsInput } from 'react-tag-input-component';

const CompleteProfile = () => {
  const wordLimit = 600;
  const [phone, setPhone] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [wordCount, setWordCount] = useState();
  const [skills, setSkills] = useState([]);
  const [wordCountExceeded, setWordCountExceeded] = useState(false);
  const [education, setEducation] = useState([
    { name: 'École Nationale Supérieure Polytechnique de Yaoundé ' },
  ]);
  const [experience, setExperience] = useState([{ title: '' }]);

  const handleAddEducation = () => {
    setEducation([...education, { name: '' }]);
  };
  const handleChangeEducation = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...education];
    onChangeValue[index][name] = value;
    setEducation(onChangeValue);
  };

  const handleDeleteEducation = (index) => {
    const newArray = [...education];
    newArray.splice(index, 1);
    setEducation(newArray);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { title: '' }]);
  };
  const handleChangeExperience = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...experience];
    onChangeValue[index][name] = value;
    setExperience(onChangeValue);
  };
  const handleDeleteExperience = (index) => {
    const newArray = [...experience];
    newArray.splice(index, 1);
    setExperience(newArray);
  };

  const handleAboutTextOnChange = (event) => {
    setWordCount(event.target.value.length);
    if (event.target.value.length <= wordLimit) {
      setAboutText(event.target.value);
      setWordCountExceeded(false);
    } else {
      setWordCountExceeded(true);
    }
  };

  const handleOnChangePhone = (value) => {
    setPhone(value);
  };

  const selectCountry = (val) => {
    setCountry(val);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  console.log(experience, 'this is experience');
  console.log(education, 'this is education');

  return (
    <div className="completePro-container">
      <div className="borderb-container">
        <div className="header-container">
          <div className="landing-header">
            <div className="landing-silicon-logo ">
              <img
                src={logo}
                alt="silicon logo"
                className="landing-silicon-logo-img cp-logo-img"
              />
              <p className="landing-logo-text cp-logo-text">iliconConnect</p>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="complete-profile-body">
          <form action="" className="complete-profile-form column">
            <p className="complete-profile-heading">Complete your profile</p>
            <div className="userdata-complete-row row">
              <label className="input-labels-CP">First Name</label>
              <input type="text" className="name-input-cp" name="" id="" />
            </div>
            <div className="userdata-complete-row row">
              <label className="input-labels-CP">Last Name</label>
              <input type="text" className="name-input-cp" name="" id="" />
            </div>
            <div className="userdata-complete-row row">
              <label className="input-labels-CP">Tel</label>
              <PhoneInput
                country={'cm'}
                value={phone}
                onChange={handleOnChangePhone}
                autoCorrect="off"
                inputStyle={{
                  width: '100%',
                  height: '2.5rem',
                  fontFamily: 'Raleway',
                  fontSize: '1rem',
                  borderRadius: '6px',
                }}
              />
            </div>
            <div className="userdata-complete-column column">
              <label className="input-labels-CP">About</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={handleAboutTextOnChange}
                // style={{
                //   border: wordCountExceeded ? '1px solid red' : '1px solid #ccc',
                // }}
              />
              <div className="handle-wc-errors row">
                {wordCountExceeded ? (
                  <p className="exceeded-text-length">
                    Exceeded maximum character length of {wordLimit}
                  </p>
                ) : (
                  <p></p>
                )}
                <p className="word-count-display">
                  {wordCount}/{wordLimit} words
                </p>
              </div>
            </div>

            <div className="userdata-complete-column column">
              <div className="add-new-education-div row">
                <label htmlFor="" className="input-labels-CP">
                  Education
                </label>
              </div>
              {education.map((item, index) => (
                <div className="input_container-education" key={index}>
                  <input
                    name="firstName"
                    type="text"
                    value={item.name}
                    onChange={(event) => handleChangeEducation(event, index)}
                  />
                  {education.length > 1 && index !== 1 && (
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteEducation(index)}
                    >
                      Delete
                    </button>
                  )}
                  {index === education.length - 1 && (
                    <button
                      className="add-new-btn"
                      onClick={() => handleAddEducation()}
                    >
                      <span className="plus-sign">+</span>Add New Education
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="userdata-complete-column column">
              <div className="add-new-education-div row">
                <label htmlFor="" className="input-labels-CP">
                  Experience
                </label>
              </div>
              {experience.map((item, index) => (
                <div className="input_container-education" key={index}>
                  <input
                    name="title"
                    type="text"
                    value={item.title}
                    onChange={(event) => handleChangeExperience(event, index)}
                  />
                  {experience.length > 1 && (
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteExperience(index)}
                    >
                      Delete
                    </button>
                  )}
                  {index === experience.length - 1 && (
                    <button
                      className="add-new-btn"
                      onClick={() => handleAddExperience()}
                    >
                      <span className="plus-sign">+</span>Add New Experience
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="userdata-complete-column column">
              <label htmlFor="" className="input-labels-CP">
                Skills
              </label>
              <TagsInput
                className="tag-input"
                value={skills}
                onChange={setSkills}
                name="fruits"
              />
              <em>press enter to add new skill</em>
            </div>

            <div className="userdata-complete-column column">
              <label htmlFor="" className="input-labels-CP">
                Location
              </label>
              <div className="country-region-div column">
                <label htmlFor="" className="input-labels-CP-other">
                  Country
                </label>
                <CountryDropdown
                  classes="other-input"
                  value={country}
                  onChange={(val) => selectCountry(val)}
                />
              </div>
              <div className="country-region-div column">
                <label htmlFor="" className="input-labels-CP-other">
                  Region
                </label>
                <RegionDropdown
                  classes="other-input"
                  country={country}
                  value={region}
                  onChange={(val) => selectRegion(val)}
                />
              </div>
            </div>

            <button className="login-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;