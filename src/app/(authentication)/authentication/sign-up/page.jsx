import BackToHomeButton from "../components/BackToHomeButton";
import SignUpForm from "../components/SignUpForm";

const page = () => {
  return (
    <section>
      <div className="min-h-screen w-full flex justify-center items-center">
        {/* Sign Up Form  */}
        <SignUpForm />
        <BackToHomeButton />
      </div>
    </section>
  );
};

export default page;
