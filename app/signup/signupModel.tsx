// SignupModel.tsx
class SignupModel {
  formData: {
    username: string;
    password: string;
    confirmpassword: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    type : string;
  };

  constructor() {
    this.formData = {
      username: "",
      password: "",
      confirmpassword: "",
      firstname: "",
      lastname: "",
      phone: "",
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
      const signInResponse = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.formData.username,
          password: this.formData.password
        })
      });
      if (!signInResponse.ok) {
        throw new Error("Failed to sign in user after registration");
      }
      
      // Optionally, you can handle storing tokens or user data after sign-in
  
      // Reset form data after successful sign-up and sign-in
      this.formData = {
        username: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        type : ""
      };
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default SignupModel;
