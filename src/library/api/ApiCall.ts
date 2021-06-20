import { BASE_API_URL } from "../../data/Env";
import { getLogInRoute, LogInRequest, LogInResponse } from "./LogIn";

const RequestMethod = {
    GET: "GET",
    POST: "POST"
};

class ApiCall {

    public logIn(body: LogInRequest) {
        return ApiCall.call<LogInResponse>(getLogInRoute(), body);
    }

    private static async call<T>(input: string, body?: any, method?: string): Promise<T> {
        const requestInit = {
            method: method || RequestMethod.POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: body && JSON.stringify(body)
        } as RequestInit;

        const response = await fetch(`${BASE_API_URL}/${input}`, requestInit);
        if(!response.ok)
            throw new Error("Something went wrong!");
        return await response.json();
    }

}

export default ApiCall;