import API from "./api"

const updateProfile = async (profile: FormData) => {
    const res = await API.post("users/profile", profile)
    return res.data.data
}

const getUserByAddress = async (address: string) => {
    const res = await API.get(`users/profile/${address}`)
    return res.data.data
}

const getUserNFTs = async (address: string) => {
    const res = await API.get(`users/nfts/${address}`)
    return res.data.data
}

export const userService = {
    updateProfile,
    getUserByAddress,
    getUserNFTs
}