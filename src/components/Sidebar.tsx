import React from 'react'
import { Container, Image } from 'react-bootstrap'

function Sidebar() {
    return (
        <div >
            <Image src="/img/person.jpg" thumbnail />
            <div className="d-flex justify-content-between" style={{marginTop: 6}}>
                <small style={{ fontSize: 14,  color: "#2d080a", fontWeight: "bold"}}>Founder</small> <em style={{ fontSize: 14,  color: "#7c3626", fontWeight: "bold"}}>Cornelius Eze</em>
            </div>
            <div className="d-flex justify-content-between" style={{marginTop: 6}}>
                <small style={{ fontSize: 14,  color: "#2d080a", fontWeight: "bold"}}>Occupation</small> <em style={{ fontSize: 14,  color: "#7c3626", fontWeight: "bold"}}>Software Developer</em>
            </div>
            <div className="d-flex justify-content-between" style={{marginTop: 6}}>
                <small style={{ fontSize: 14,  color: "#2d080a", fontWeight: "bold"}}>Social</small> <em style={{ fontSize: 14,  color: "#7c3626"}}>Facebook</em> <em style={{ fontSize: 14,  color: "#7c3626"}}>google</em>
            </div>
        </div>
    )
}

export default Sidebar;
