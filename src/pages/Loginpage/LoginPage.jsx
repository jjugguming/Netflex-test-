import { useRef } from "react";
import Page from "../../components/Page/Page";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../contexts/auth.context";

function LoginPage() {
	const { processOnLogIn } = useAuth(AuthContext);
	const navigate = useNavigate();
	const idInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const handleClickLoginButton = () => {
		const id = idInputRef.current.value;
		const password = idInputRef.current.value;
		const response = processOnLogIn({ id, password });
		if (response === "로그인 실패") {
			alert("로그인 실패");
			return;
		}
		navigate("/");
	};

	return (
		<Page>
			<form className=" flex flex-col justify-center items-center gap-y-10 mt-20">
				<h1 className="text-5xl">
					Log In to <span className="text-red-500">NETFLEX</span>
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
					<div className="flex items-center justify-center mt-5">
						<button
							className="w-[450px] bg-red-500 border border-red-500 py-4 px-7 rounded-md text-xl"
							onClick={handleClickLoginButton}
						>
							로그인
						</button>
					</div>
				</fieldset>
			</form>
		</Page>
	);
}

export default LoginPage;
