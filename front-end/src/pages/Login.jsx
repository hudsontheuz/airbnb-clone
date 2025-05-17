import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Faça seu login</h1>
        <form className="flex w-full flex-col gap-3">
          <input
            type="email"
            className="w-full rounded-full border border-gray-400 px-4 py-2"
            placeholder="Digite seu e-mail:"
          />

          <input
            type="password"
            className="w-full rounded-full border border-gray-400 px-4 py-2"
            placeholder="Digite sua senha:"
          />

          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-400 px-4 py-2 font-bold text-white">
            Login
          </button>

          <p>
            Ainda não tem uma conta?
            <Link to="/Register" className="font-semibold underline">
              Resgistre-se aqui
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
