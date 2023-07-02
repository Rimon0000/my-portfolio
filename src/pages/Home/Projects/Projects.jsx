import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactProjects from './ReactProjects';
import JavascriptProjects from './JavascriptProjects';


const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='text-center text-4xl font-bold mt-10 p-5 border-b-4 border-gray-500 w-1/2 mx-auto'>My Projects</h2>
            <div>
            <Tabs>
              <TabList className='text-center font-bold text-2xl mb-5'>
                <Tab>ALL</Tab>
                <Tab>React</Tab>
                <Tab>Javascript</Tab>
              </TabList>
          
              <TabPanel>
                <ReactProjects></ReactProjects>
                <JavascriptProjects></JavascriptProjects>
              </TabPanel>
              <TabPanel>
                <ReactProjects></ReactProjects>
              </TabPanel>
              <TabPanel>
                <JavascriptProjects></JavascriptProjects>
              </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Projects;