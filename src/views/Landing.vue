<template>
  <div class="max-w-11/12 mx-auto">
    <navbar-component class="flex sticky align-center"></navbar-component>
    <main>
      <div class="relative pt-16 pb-32 flex">
        <section
          class="header relative pt-16 items-center flex h-screen w-screen"
        >
          <div class="container mx-auto items-center flex flex-wrap gap-4">
            <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div class="pt-22 sm:pt-0">
                <h2
                  class="font-semibold text-4xl text-blueGray-600"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  Open Source Africa.
                </h2>
                <p
                  class="mt-4 text-lg leading-relaxed text-blueGray-500"
                  data-aos="zoom-in"
                  data-aos-offset="200px"
                >
                  OpenSourceAfrica ( O . S . A ) IS be conceptualized as a
                  platform that aims to promote and facilitate open-source
                  development and collaboration within the African tech and
                  software development community all over the region an the
                  world.
                </p>
                <div class="mt-12">
                  <a
                    href=""
                    target="_blank"
                    class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gradient-to-r from-[#A30F1D] to-[#986300] active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started </a
                  ><a
                    href=""
                    class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gradient-to-r from-[#986300] to-[#A30F1D] active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    target="_blank"
                  >
                    <i class="fas fa-github w-10 h-10"></i>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-5/12 h-5/12"
            src="../assets/img/african_landing_page.jpeg"
            alt="..."
          />
        </section>
      </div>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative text-white flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg bg-gradient-to-r from-[#986300] to-[#A30F1D]"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300"
                  >
                    <i class="fas fa-award text-[#A30F1D]"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Project Showcase</h6>
                  <p class="mt-2 mb-4 text-gray-300">
                    Users can submit their open-source projects to the platform,
                    providing details such as project name, description, URL,
                    and contact information. This project showcase serves as a
                    centralized repository for open-source software developed in
                    Africa.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="-mt-20 text-white relative flex flex-col min-w-0 break-words bg-gradient-to-r from-[#A30F1D] to-[#986300] w-full mb-8 shadow-lg rounded-lg hover:shadow-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300"
                  >
                    <i class="fas fa-retweet text-[#A30F1D]"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Skills Development</h6>
                  <p class="mt-2 mb-4 text-gray-300">
                    Open Source Africa offers educational resources, tutorials,
                    and documentation to help developers enhance their skills in
                    various programming languages and technologies. It can
                    include coding challenges, online courses, and mentorship
                    programs.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words text-white bg-gradient-to-r from-[#986300] to-[#A30F1D] w-full mb-8 shadow-lg rounded-lg hover:shadow-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300"
                  >
                    <i class="fas fa-fingerprint text-[#A30F1D]"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    Secure and Trustworthy Platform
                  </h6>
                  <p class="mt-2 mb-4 text-gray-300">
                    Open Source Africa ensures the security and integrity of
                    projects hosted on the platform. It can implement code
                    reviews, vulnerability scanning, and a transparent vetting
                    process to maintain the quality of submitted projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Community Engagement
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Open Source Africa encourages collaboration and networking
                within the Kenyan tech community. It hosts events, hackathons,
                and meetups, both online and in-person, to facilitate knowledge
                exchange and collaboration among developers and tech
                enthusiasts.
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                OpenKe can offer support and resources for maintaining and
                growing open-source projects. This may include guidance on
                project governance, funding opportunities, and legal aspects of
                open-source licensing.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                class="font-bold text-gray-800 mt-8 hover:text-gray-500"
                >Join Our Community Of OpenSource Developers</a
              >
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
              >
                <img
                  alt="..."
                  src="https://plus.unsplash.com/premium_photo-1663045495810-372a2e30119b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-[#A30F1D] fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-gray-600">
                    Start Your OpenSource Project Now.
                  </h4>
                  <p class="text-md font-light mt-2 text-gray-600">
                    Get overwhelming support from the African Tech-Community.
                    Lets shape our tech advancement's from within.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 border-none"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/cta_open_source_africa.jpeg"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-gray-300 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gradient-to-r from-[#A30F1D] to-[#986300]"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">A growing Africa</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  An open inclusion and contribution to a the next step of a
                  growing Africa . Are a techie with necessary skill to write
                  software or tabulate data .
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-3xl font-bold inline-block py-1 px-2 uppercase rounded-full text-gray-800 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Learn a Skill with us.</h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-3xl font-bold inline-block py-1 px-2 uppercase rounded-full text-gray-800 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Showcase your Project to the other Africans
                        </h4>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-3xl font-bold inline-block py-1 px-2 uppercase rounded-full text-gray-800 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Let Other Africans and the whole world Support your
                          project.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-12/12 px-4">
              <h2 class="text-4xl font-semibold">
                One day you might just Be in our wall of Fame.
              </h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                The Following Individuals Are out-standing members of the
                openSource Africa Community. CheckOut Their work.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
            <div
              class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mb-4 pb-4"
            >
              <div class="px-6">
                <img
                  alt="..."
                  src="../assets/img/cta_open_source_africa.jpeg"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">John Doe</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
          class="top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-19"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                Build something Amazing
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Let Us be Part of your journey.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Import Existing Projects
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Quickly Integrate your open-source projects from github
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Participate In our Data Analysis open forums.
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Take openSource data and use to build prediction algorithms to
                help africans health care, education and agriculture.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Use our CLI tool to upload your projects
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                With this you can Quickly start projects and push them to our
                platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from "../components/Footer.vue";
import NavbarComponent from "../components/Navbar.vue";
export default {
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
