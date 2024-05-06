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
        (response.json().then((data) => console.log(data)));
      }
      const data = await response.json();
      console.log(data);
      console.log(data.id);
      localStorage.setItem("id", data.id);
      if (typeof data === 'number') {
        const dataString = data.toString();
        if (dataString.charAt(0) === "1") {
          localStorage.setItem(
            "role",
            "customer"
          );
        } else if (dataString.charAt(0) === "2") {
          localStorage.setItem(
            "role",
            "owner"
          );
        }
      } else {
        console.error("Data is not in the expected format or is empty.");
      }
      localStorage.setItem("login", data.token);
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default SignupModel;
