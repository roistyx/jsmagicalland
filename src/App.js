import React from "react";
import { Between, SpaceEvenly, Center, FlexEnd } from "./layouts/Line";
import { Btn } from "./elements/Btn";
import { Rows } from "./layouts/Line";
import SearchField from "./elements/TextField";
import { AlignCenter } from "./layouts/Line";
import { Box } from "./layouts/Box";

import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Callback from "./pages/Callback";
import Closures from "./pages/Closures";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/callback" element={<Callback />}></Route>
          <Route path="/closures" element={<Closures />}></Route>
        </Routes>
      </BrowserRouter>
      <Center>
        <Box>
          <h2>JavaScript Examples</h2>
          <a href="/callback">Callback</a>
          <br />
          <a href="/closures">Closures</a>
        </Box>
      </Center>
    </div>
  );
}
