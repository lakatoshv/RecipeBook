/**
 * User model.
 */
export class User {
    /**
     * User Id
     * @param Id number
     * User UserName
     * @param UserName string
     * User Email
     * @param Email string|null
     * User FirstName
     * @param FirstName string|null
     * User LastName
     * @param LastName string|null
     * User PhoneNumber
     * @param PhoneNumber string|null
     * User Roles
     * @param Roles Array<string>
     * User Password
     * @param Password string|null
     * User About
     * @param About string|null
     */
    constructor(
        public Id: number,
        public UserName: string,

        public Email?: string,
        public FirstName?: string,
        public LastName?: string,
        public PhoneNumber?: string,
        //public ProfileImg?: string,
        public Roles: Array<string> = [],
        public Password?: string,
        public About?: string
    ) { }
}
