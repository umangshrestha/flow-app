import { hashPassword, verifyPassword } from "@utils/validator";

describe("Salting and Hashing", () => {
     
    it("Verify diffrent hash is produced for same password.", async () => {
        const password = "THIS IS A UNIQUE PASSWORD";
        let hashed1 = await hashPassword(password);
        let hashed2 = await hashPassword(password);
        expect(hashed1===hashed2).toBe(false);
    })

    it("Verify the Hash produced diffrent hash for same password.", async () => {
        const password1 = "THIS IS A UNIQUE PASSWORD 1";
        const password2 = "THIS IS A UNIQUE PASSWORD 2";
        let hashed1 = await hashPassword(password1);
        let hashed2 = await hashPassword(password2);
        expect(await verifyPassword(password1, hashed1)).toBe(true);
        expect(await verifyPassword(password2, hashed2)).toBe(true);
        expect(await verifyPassword(password1, hashed2)).toBe(false);
        expect(await verifyPassword(password2, hashed1)).toBe(false);
    })

    it("Verify the hash can be compared", async () => {
        let password = "THIS IS A UNIQUE PASSWORD";
        let hashed1 = await hashPassword(password);
        let hashed2 = await hashPassword(password);
        expect(await verifyPassword(password, hashed1)).toBe(true);
        expect(await verifyPassword(password, hashed2)).toBe(true);

    } )
})