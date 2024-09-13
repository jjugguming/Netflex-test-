import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../contexts/auth.context";

function SignUpPage() {
	const navigate = useNavigate();
	const { processOnSignUp } = useAuth(AuthContext);
	const idInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const nicknameInputRef = useRef(null);

	const handleSubmitSignUpForm = (event) => {
		event.preventDefault();
		const id = idInputRef.current.value;
		const password = idInputRef.current.value;
		const nickname = idInputRef.current.value;
		const newMemberData = {
			id,
			password,
			nickname,
		};
		processOnSignUp(newMemberData);
		navigate("/");
	};

	return (
		<section className="h-full flex items-center justify-center">
			<form
				onSubmit={handleSubmitSignUpForm}
				className=" flex flex-col justify-center items-center gap-y-6 text-white font-bold"
			>
				<h1 className=" text-white text-5xl font-bold">
					Sign Up to <span className="text-red-500">NETFLEX</span>
				</h1>
				<fieldset className=" flex flex-col gap-y-6 text-xl font-normal">
					<legend className="-ml-[9999px]">로그인 양식 폼</legend>
					<div className="flex-col flex gap-x-5">
						<label htmlFor="id">아이디</label>
						<input
							id="id"
							className="w-[450px] py-2 px-3 text-black border rounded-md"
							type="text"
							ref={idInputRef}
						/>
					</div>
					<div className="flex-col flex gap-x-5">
						<label htmlFor="password">비밀번호</label>
						<input
							id="password"
							className="w-[450px] py-2 px-3 text-black border rounded-md"
							type="password"
							ref={passwordInputRef}
						/>
					</div>
					<div className="flex-col flex gap-x-5">
						<label htmlFor="nickname">닉네임</label>
						<input
							id="nickname"
							className="w-[450px] py-2 px-3 text-black border rounded-md"
							type="text"
							ref={nicknameInputRef}
						/>
					</div>
					<div className="flex items-center justify-center mt-5">
						<button className="w-[450px] bg-red-500 border border-red-500 py-4 px-7 rounded-md text-xl">
							로그인
						</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
}

export default SignUpPage;
