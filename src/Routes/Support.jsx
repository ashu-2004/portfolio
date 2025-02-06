// import { Outlet } from "react-router-dom";
// import Container from "../componetns/Container";
// import Navbar from "../componetns/Navbar";
// import ParticleBackground from "../componetns/ParticleBackground";

// function Support() {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-900">
//       <div>
//         <ParticleBackground />
//       </div>
//       <Navbar />
//       <div className="container mx-auto px-8 pt-24 lg:pt-16">
//         <Container>
//           <Outlet />
//         </Container>
//       </div>
//     </div>
//   );
// }
// export default Support;
import { Outlet } from "react-router-dom";
import Container from "../componetns/Container";
import Navbar from "../componetns/Navbar";
import ParticleBackground from "../componetns/ParticleBackground";
import Footer from "../componetns/Footer";

function Support() {
  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-black text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10">
        <ParticleBackground />
      </div>

      <Navbar />
      <div className="container mx-auto px-8 lg:pt-8">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Support;