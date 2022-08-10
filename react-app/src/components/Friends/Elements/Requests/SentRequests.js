import React from "react";
import { Modal } from "../../../Modal";
import RequestSentCard from "./RequestSentCard";

function SentRequests({ requests, setShowSentRequests }) {
    return (
        <Modal onClose={() => setShowSentRequests(false)}>
            <div>
                <h2>Sent Requests</h2>
                {requests &&
                    Object.values(requests).map(request => {
                        return <RequestSentCard key={request.id} request={request} />;
                    })}
            </div>
        </Modal>
    );
}

export default SentRequests;
