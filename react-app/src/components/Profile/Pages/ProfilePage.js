import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFriends } from "../../../store/friends";
import { getPosts } from "../../../store/posts";
import Post from "../../Post/Elements/Post";
import CreatePostForm from "../../Post/Form/CreatePostForm";
import BigProfilePicture from "../Elements/BigProfilePicture";
import CoverPhoto from "../Elements/CoverPhoto";
import Intro from "../Elements/Intro";
import Photos from "../Elements/Photos";
import EditProfileForm from "../Form/EditProfileForm";
import "./profilePage.css";

function ProfilePage() {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profile, setProfile] = useState(0);
    const profileId = parseInt(useParams().id);
    const user = useSelector(state => state.session.user);
    const friends = useSelector(state => state.friends);
    const posts = Object.values(useSelector(state => state.posts));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends());
        dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        if (profileId === user.id) setProfile(user);
        if (friends[profileId]) setProfile(friends[profileId]);
    }, [user, friends, profileId]);

    if (!profile)
        return (
            <div id="noFriend">
                <h1>You aren't friends with this user, or they don't exist.</h1>
                <Link to="/">Back to home</Link>
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
            <div id="profile-bottom">
                <div id="column-container">
                    <div id="left-column">
                        <Intro profile={profile} />
                        <Photos profile={profile} />
                    </div>
                    <div id="right-column">
                        {user === profile && <CreatePostForm />}
                        {posts.length > 0 &&
                            posts
                                .filter(post => {
                                    return post.user_id === profile.id;
                                })
                                .map(post => {
                                    return <Post key={post.id} post={post} />;
                                })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
