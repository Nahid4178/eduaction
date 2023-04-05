import React from "react"
import Awrapper from "../../components/home/testimonal/Awrapper"
import "../about/about.css"
import Back from "../common/back/Back"
import "./team.css"
import TeamCard from "./TeamCard"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
