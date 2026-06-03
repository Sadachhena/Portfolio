import { useState } from "react";
import ProjectCard from "./ProjectCard";
import EmptyCard from "./EmptyCard";
import Ecommernace from '../Images/E.png'
import Weather from '../Images/W.png'
import Todo from '../Images/T.png'
import Password from '../Images/P.png'
import Fastfood from '../Images/Fastfood.png'
import Ngo from '../Images/Ngo.png'
import Grocfiy from '../Images/Grocfiy.png'
export default function Projects() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="relative z-10 max-w-6xl mx-auto mt-24 px-6 text-white text-center">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-gray-400 mb-8">
        My real work — clean and practical projects
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 relative z-20">

        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === "tab1"
              ? "bg-purple-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Ecommerce
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === "tab2"
              ? "bg-purple-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Mini Projects
        </button>

      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* TAB 1 */}
        {activeTab === "tab1" && (
          <>
          {/* {Ecommernace Store} */}
            <ProjectCard
              img={Ecommernace}
              title="Ecommerce Website"
              link="https://github.com/Sadachhena/Kart-E-Commerance"
            />
           {/* {Fast Food Project} */}
           <ProjectCard
              img={Fastfood}
              title="Fast-Food"
              link="https://github.com/Sadachhena/Fast-Food"
            />
          
          {/* {Ngo Life Website} */}
           <ProjectCard
              img={Ngo}
              title="NGO-LIFE"
              link="https://github.com/Sadachhena/NGO-LIFE"
            />
             {/* { Grocfiy Store} */}
              <ProjectCard
              img={Grocfiy}
              title="Grocfiy Store"
              link="https://github.com/Sadachhena/Grocify-Food-Website"
            />
            <EmptyCard />
             <EmptyCard />
              <EmptyCard />
               <EmptyCard />
          </>
        )}

        {/* TAB 2 */}
        {activeTab === "tab2" && (
          <>
            <ProjectCard
              img={Password}
              title="Password Generator"
              link="https://github.com/Sadachhena/Random-Password-Generator"
            />
            <ProjectCard
              img={Weather}
              title="Weather App"
              link="https://github.com/Sadachhena/Weather-App"
            />
            <ProjectCard
              img={Todo}
              title="Todo List"
              link="https://github.com/Sadachhena/TODOLIST"
            />
          </>
        )}

      </div>
    </section>
  );
}