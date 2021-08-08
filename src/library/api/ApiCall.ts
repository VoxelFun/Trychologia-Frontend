import { BASE_API_URL } from "../../data/Env";
import { SafeStaffMember } from "../model/SafeStaffMember";
import { StaffMember } from "../model/StaffMember";
import { WeekSchedule } from "../model/WeekSchedule";
import { BookVisitRequest, getBookVisitRoute } from "./BookVisit";
import { getGetSafeStaffMembersRoute } from "./GetSafeStaffMembers";
import { getGetStaffMemberRoute } from "./GetStaffMember";
import { getLogInRoute, LogInRequest, LogInResponse } from "./LogIn";
import { getSaveVisitsRoute, SaveVisitsRequest } from "./SaveVisits";
import { getSetStaffMemberRoute } from "./SetStaffMember";
import { getUpdateWeekScheduleRoute, UpdateWeekScheduleResponse } from "./UpdateWeekSchedule";

const RequestMethod = {
    GET: "GET",
    POST: "POST"
};

const Credentials = {
    DEFAULT: "same-origin",
    ENABLED: "include",
    DISABLED: "omit"
};

class ApiCall {

    public bookVisit(body: BookVisitRequest) {
        return ApiCall.call<{}>(getBookVisitRoute(), {
            body
        });
    }

    public getSafeStaffMembers() {
        return ApiCall.call<SafeStaffMember[]>(getGetSafeStaffMembersRoute(), {
            method: RequestMethod.GET
        });
    }

    public getStaffMember() {
        return ApiCall.call<StaffMember>(getGetStaffMemberRoute(), {
            method: RequestMethod.GET,
            credentials: Credentials.ENABLED
        });
    }

    public logIn(body: LogInRequest) {
        return ApiCall.call<LogInResponse>(getLogInRoute(), {
            body,
            credentials: Credentials.ENABLED
        });
    }

    public logOut() {
        return ApiCall.call<{}>("logout", {
            method: RequestMethod.GET
        });
    }

    public saveVisits(body: SaveVisitsRequest) {
        return ApiCall.call<{}>(getSaveVisitsRoute(), {
            body,
            credentials: Credentials.ENABLED
        });
    }

    public setStaffMember(staffMember: StaffMember) {
        return ApiCall.call<{}>(getSetStaffMemberRoute(), {
            body: staffMember,
            credentials: Credentials.ENABLED
        });
    }

    public updateWeekSchedule(weekSchedule: WeekSchedule) {
        return ApiCall.call<UpdateWeekScheduleResponse>(getUpdateWeekScheduleRoute(), {
            body: {weekSchedule},
            credentials: Credentials.ENABLED
        });
    }

    private static async call<T>(input: string, options: OptionsHolder): Promise<T> {
        const requestInit = {
            method: options.method || RequestMethod.POST,
            headers: {
                "Content-Type": "application/json"
            },
            body: options.body && JSON.stringify(options.body),
            credentials: options.credentials || Credentials.DEFAULT
        } as RequestInit;

        const response = await fetch(`${BASE_API_URL}/${input}`, requestInit);
        if(!response.ok)
            throw new Error(`Request ${input} failed`);
        
        try {
            return await response.json();
        } catch(err) {
            return new Promise<any>((resolve) => resolve({}))
        }
    }

}

interface OptionsHolder {
    body?: any;
    method?: string;
    credentials?: string;
};

export default ApiCall;