

import React, { useState } from 'react';

function Formsample() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('male');
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState('');
    const [url, setUrl] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        // Reset all state variables here
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setGender('male');
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume('');
        setUrl('');
        setSelectedOption('');
        setAbout('');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl font-bold mb-10">React Form</h1>
            <fieldset className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <form action="#" method="get">
                    {/* First Name */}
                    <div className="mb-6">
                        <label htmlFor="firstname" className="block text-lg font-medium text-gray-700 mb-1">First Name*</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Last Name */}
                    <div className="mb-6">
                        <label htmlFor="lastname" className="block text-lg font-medium text-gray-700 mb-1">Last Name*</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Contact */}
                    <div className="mb-6">
                        <label htmlFor="tel" className="block text-lg font-medium text-gray-700 mb-1">Contact*</label>
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Enter Mobile Number"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Gender */}
                    <div className="mb-6">
                        <label htmlFor="gender" className="block text-lg font-medium text-gray-700 mb-1">Gender*</label>
                        <div className="flex space-x-4">
                            <label htmlFor="male" className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                    checked={gender === 'male'}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label htmlFor="female" className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                    checked={gender === 'female'}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label htmlFor="other" className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    id="other"
                                    checked={gender === 'other'}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                    </div>
                    {/* Best Subject */}
                    <div className="mb-6">
                        <label htmlFor="subjects" className="block text-lg font-medium text-gray-700 mb-1">Your Best Subject</label>
                        <div className="flex flex-col space-y-2">
                            {['english', 'maths', 'physics'].map((subject, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="subjects"
                                        id={subject}
                                        checked={subjects[subject]}
                                        onChange={() => handleSubjectChange(subject)}
                                        className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <span className="text-gray-700 capitalize">{subject}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Resume */}
                    <div className="mb-6">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-1">Upload Resume*</label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={(e) => setResume(e.target.files[0])}
                            required
                            className="w-full"
                        />
                    </div>
                    {/* URL */}
                    <div className="mb-6">
                        <label htmlFor="url" className="block text-lg font-medium text-gray-700 mb-1">Enter URL*</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter URL"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Select Option */}
                    <div className="mb-6">
                        <label htmlFor="select" className="block text-lg font-medium text-gray-700 mb-1">Select Your Choice</label>
                        <select
                            name="select"
                            id="select"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="" disabled selected={selectedOption === ''}>
                                Select your Ans
                            </option>
                            <optgroup label="Beginners">
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">JavaScript</option>
                            </optgroup>
                            <optgroup label="Advanced">
                                <option value="4">React</option>
                                <option value="5">Node</option>
                                <option value="6">Express</option>
                                <option value="7">MongoDB</option>
                            </optgroup>
                        </select>
                    </div>
                    {/* About */}
                    <div className="mb-6">
                        <label htmlFor="about" className="block text-lg font-medium text-gray-700 mb-1">About</label>
                        <textarea
                            name="about"
                            id="about"
                            cols="30"
                            rows="5"
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            placeholder="About yourself"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>
                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            type="reset"
                            onClick={handleReset}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default Formsample;

