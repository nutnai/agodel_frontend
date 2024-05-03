// // SignupModel.tsx
// class EditRoomModel {
//     formData: {
//       username: string;
//       password: string;
//       confirmpassword: string;
//       firstname: string;
//       lastname: string;
//       phone: string;
//       email: string;
//       type : string;
//     };
  
//     constructor() {
//       this.formData = {
//         username: "",
//         password: "",
//         confirmpassword: "",
//         firstname: "",
//         lastname: "",
//         phone: "",
//         email: "",
//         type : ""
//       };
//     }
  
//     getFormData() {
//       return this.formData;
//     }
  
//     setFormData(name: keyof SignupModel["formData"], value: string) {
//       this.formData[name] = value;
//     }
  
//     async signup() {
//       try {
//         const response = await fetch("/api/place/create", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(this.formData)
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//   }
  
//   export default SignupModel;
  