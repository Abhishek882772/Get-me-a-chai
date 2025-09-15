import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/models/User.js"
import Payment from "@/models/Payment"
import { use } from "react"

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        const client = await mongoose.connect("mongodb://localhost:27017/Chai")
        //check user already exists
        const userexist = User.findOne({ email: user.email })
        if (!userexist) {
          //create new user
          const newuser = new User({
            email: user.email,
            name: user.name,
            username: user.email.split("@")[0] + Math.floor(Math.random() * 1000),
            phone: "0000000000",
            razorpayKey: "rzp_test_1DP5mmOlF5G5ag",
            razorpaySecret: "your_razorpay_secret"
          })
          await newuser.save()
          user.name = newuser.username
        }
        else {
          user.name = userexist.username
        }
        return true
      }
    }
  }
})
export { authOptions as GET, authOptions as POST }