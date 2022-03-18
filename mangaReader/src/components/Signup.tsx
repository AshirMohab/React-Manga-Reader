import { useForm } from "@felte/react";
import { Store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const { form } = useForm({
    onSubmit: (values) => {
      Store.addNotification({
        title: "Successful sign-in",
        message: `${values.name} has successfully signed in`,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
      navigate("/");
    },
  });

  return (
    <div className="rounded-lg bg-slate-200  p-3">
      <h2 className="text-3xl p-3">Sign-up</h2>
      <form ref={form} action="/">
        <div className="justify-center grid grid-cols-1 flex-cols p-3 m-3 gap-3 bg-slate-50">
          <div>
            <label htmlFor="name" className="p-3">
              First Name
            </label>
            <input id="name" name="name" placeholder="Bob" type="text" />
          </div>

          <div>
            <label htmlFor="surname" className="p-3">
              Last Name
            </label>
            <input id="surname" name="surname" placeholder="Ross" type="text" />
          </div>
          <div>
            <label htmlFor="age" className="p-3">
              Age
            </label>
            <input
              id="age"
              name="age"
              defaultValue={0}
              placeholder="18"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="email" className="p-3">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="bob.ross@IcanPaint.co.za"
              type="email"
            />
          </div>
          <div>
            <button className="btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
