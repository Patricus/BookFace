import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFriends } from "../../../store/friends";
import BigProfilePicture from "../Elements/BigProfilePicture";
import CoverPhoto from "../Elements/CoverPhoto";
import EditProfileForm from "../Form/EditProfileForm";
import "./profilePage.css";

function ProfilePage() {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profile, setProfile] = useState(0);
    const profileId = parseInt(useParams().id);
    const user = useSelector(state => state.session.user);
    const friends = useSelector(state => state.friends);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    useEffect(() => {
        if (profileId === user.id) setProfile(user);
        if (friends[profileId]) setProfile(friends[profileId]);
    }, [user, friends, profileId]);

    if (!profile)
        return (
            <div>
                <h1>You aren't friends with this user.</h1>
            </div>
        );

    return (
        <>
            <div id="profile-top">
                {profile && (
                    <>
                        <CoverPhoto coverPhoto={profile.cover_pic} owner={user === profile} />
                        <div id="underCover">
                            <BigProfilePicture profile_pic={profile.profile_pic} />
                            <h1>
                                {profile.first_name} {profile.last_name}
                            </h1>
                            {user === profile && (
                                <>
                                    {showEditProfile && (
                                        <EditProfileForm
                                            profile={profile}
                                            setShowEditProfile={setShowEditProfile}
                                        />
                                    )}
                                    <button
                                        id="edit-profile-button"
                                        onClick={() => setShowEditProfile(true)}>
                                        Edit profile
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div id="profile-bottom"></div>
        </>
    );
}

export default ProfilePage;
