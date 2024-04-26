// SignupModel.tsx
class SignupModel {
    formData: {
      username: string;
      password: string;
      confirmPassword: string;
      firstName: string;
      lastName: string;
      telephone: string;
      email: string;
      type : string;
    };
  
    constructor() {
      this.formData = {
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        telephone: "",
        email: "",
        type : ""
      };
    }
  
    getFormData() {
      return this.formData;
    }
  
    setFormData(name: keyof SignupModel["formData"], value: string) {
      this.formData[name] = value;
    }
  
    async signup() {
      try {
        const response = await fetch("/api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formData)
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
  
  export default SignupModel;
  