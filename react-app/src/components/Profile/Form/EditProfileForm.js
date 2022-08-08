import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../../store/session";
import { Modal } from "../../Modal";
import defaultProfile from "../../images/default-profile.png";

// Form used to edit a post
function EditProfileForm({ profile, setShowEditProfile }) {
    const [bio, setBio] = useState(profile.bio);
    const [born_from, setBorn_from] = useState(profile.born_from);
    const [born_from_city, setBorn_from_city] = useState(profile.born_from.split(", ")[0]);
    const [born_from_state, setBorn_from_state] = useState(profile.born_from.split(", ")[1]);
    const [cover_pic, setCover_pic] = useState();
    const [previewCover_pic, setPreviewCover_pic] = useState(profile.cover_pic);
    const [profile_pic, setProfile_pic] = useState();
    const [previewProfile_pic, setPreviewProfile_pic] = useState(profile.profile_pic);
    const [lives_in, setLives_in] = useState(profile.lives_in);
    const [lives_in_city, setLives_in_city] = useState(profile.lives_in.split(", ")[0]);
    const [lives_in_state, setLives_in_state] = useState(profile.lives_in.split(", ")[1]);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        setBorn_from(`${born_from_city}, ${born_from_state}`);
    }, [setBorn_from, born_from_city, born_from_state]);

    useEffect(() => {
        setLives_in(`${lives_in_city}, ${lives_in_state}`);
    }, [setLives_in, lives_in_city, lives_in_state]);

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        const data = await dispatch(editUser(bio, born_from, cover_pic, profile_pic, lives_in));

        if (data) {
            //     //Show errors
            setErrors(data);
            return;
        } else {
            //     //Close modal
            setShowEditProfile(false);
        }
    };

    const states = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
    ];

    const updateProfilePic = pic => {
        setPreviewProfile_pic(URL.createObjectURL(pic.files[0]));
        setProfile_pic(pic.files[0]);
    };

    const updateCoverPic = pic => {
        setPreviewCover_pic(URL.createObjectURL(pic.files[0]));
        setCover_pic(pic.files[0]);
    };

    return (
        <Modal onClose={() => setShowEditProfile(false)}>
            <h2>Edit profile</h2>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <form onSubmit={submit}>
                <h3>Profile Picture</h3>
                <div id="editProfileContainer">
                    <img
                        src={previewProfile_pic}
                        alt="profile"
                        onError={() => setPreviewProfile_pic(defaultProfile)}
                    />
                </div>
                <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={e => updateProfilePic(e.target)}
                />
                <h3>Cover Photo</h3>
                <div id="editCoverContainer">
                    {previewCover_pic && (
                        <img
                            src={previewCover_pic}
                            alt="cover"
                            onError={() => setPreviewCover_pic()}
                        />
                    )}
                </div>
                <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={e => updateCoverPic(e.target)}
                />
                <h3>Bio</h3>
                <textarea
                    name="bio"
                    placeholder="Describe yourself..."
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                />
                <h3>Customize your intro</h3>
                <div>
                    <label>Lives in</label>
                    <input
                        name="lives_in_city"
                        placeholder="What city do you live in?"
                        value={lives_in_city}
                        onChange={e => setLives_in_city(e.target.value)}
                    />
                    <select
                        name="lives_in_state"
                        value={lives_in_state}
                        onChange={e => setLives_in_state(e.target.value)}>
                        <option hidden>Choose State</option>
                        {states.map(state => {
                            return <option key={state}>{state}</option>;
                        })}
                    </select>
                </div>
                <div>
                    <label>Born from</label>
                    <input
                        name="born_from_city"
                        placeholder="What city do you live in?"
                        value={born_from_city}
                        onChange={e => setBorn_from_city(e.target.value)}
                    />
                    <select
                        name="born_from_state"
                        value={born_from_state}
                        onChange={e => setBorn_from_state(e.target.value)}>
                        <option hidden>Choose State</option>
                        {states.map(state => {
                            return <option key={state}>{state}</option>;
                        })}
                    </select>
                </div>
                <button>Update profile</button>
            </form>
        </Modal>
    );
}

export default EditProfileForm;
