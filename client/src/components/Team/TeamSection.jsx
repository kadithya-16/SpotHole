import React from "react";
import TeamCard from "../Team/TeamCard";
import "../../styles/TeamSection.css";
import image from "../../assets/pothole.jpg";

function TeamSection() {
    const teamMembers = [
        {
            image: image,
            name: "Ehasas Nahata",
            title: "Content Strategist",
        },
        {
            image: image,
            name: "Aditya Vidiyala",
            title: "Designer",
        },
        {
            image: image,
            name: "Kanduri Adithya",
            title: "UX Designer",
        },
        {
            image: image,
            name: "Udit Kandi",
            title: "Junior Strategist",
        },
        {
            image: image,
            name: "T Sai Krishna",
            title: "Studio & Production Coordinator",
        },
        {
            image: image,
            name: "Nigama Reddy V ",
            title: "Studio & Production Coordinator",
        },
    ];

    return (
        <div className="team-section">
            <h2 className="team-title">Our Team</h2>
            <div className="team-body">
                {/* Left Section - Sticky Description */}
                <div className="team-content">
                    <p className="team-description">
                        Designers, developers, strategists, producers, specialists & storytellers.
                    </p>
                </div>

                {/* Right Section - Grid */}
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            image={member.image}
                            name={member.name}
                            title={member.title}
                        />
                    ))}
                </div>
            </div>
        </div>


    );
}

export default TeamSection;
