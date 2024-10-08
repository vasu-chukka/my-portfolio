"use client";
import React from "react";
import { education } from "@/Data/GridItemsData";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./animated-modal";

export function AnimatedModal() {
  return (
    <div className="flex items-center justify-center z-50">
      <Modal>
        <ModalTrigger className="black-gradient font-bold text-white flex justify-center group/modal-btn">
          <span>View My Profile</span>
        </ModalTrigger>

        <ModalBody className="black-gradient ">
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              My Profile
            </h4>
            <div className="flex justify-between items-center p-4 border-b border-gray-300"></div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src="./vasuPic.jpeg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Vasu Chukka | Software Engineer
                  </h3>
                  <p className="text-gray-600">
                    A versatile software developer with a strong foundation in
                    front-end technologies. I enjoy turning ideas into
                    user-centric digital solutions while continuously exploring
                    new tools and techniques
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-md font-medium mb-2">Education Details</h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="text-gray-400 font-semibold">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-md font-medium mb-2">Contact Details</h3>

                <div className="mb-3">
                  <h4 className="text-gray-400 font-normal">
                    Ph No: +91 7780765991
                  </h4>
                  <p className="text-gray-400">
                    Mail : chukkavasuyadav@gmail.com
                  </p>
                  <p className="text-gray-400 text-sm">
                    Adress : 9-47A, chirala, bapatla, AndhraPradesh
                    pincode-523157
                  </p>
                </div>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
