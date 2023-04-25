import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// link: https://www.npmjs.com/package/react-tabs
export default () => (
  <div>
    <h2>Pestañas</h2>
  <Tabs>
    <TabList>
      <Tab>Título 1</Tab>
      <Tab>Título 2</Tab>
      <Tab>Título 3</Tab>
      <Tab>Título 4</Tab>
    </TabList>

    <TabPanel>
      <h2>Algún contenido 1</h2>
      <p>Insertar algún contenido en esta parte</p>
    </TabPanel>
    <TabPanel>
      <h2>Algún contenido 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Algún contenido 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Algún contenido 4</h2>
    </TabPanel>
  </Tabs>
  </div>
);