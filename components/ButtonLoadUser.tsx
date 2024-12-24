"use client";

import { useAuthToken } from "@/components/AuthResolverProvider";
import { fetchUsers } from "@/store/actions/usersFetchAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

export const ButtonRefreshUsers = () => {
    const {countUser, isError} = useAppSelector((state) => ({countUser: state.users.users.length, isError: state.users.error !== null}));
    const dispatch = useAppDispatch();
    const token = useAuthToken();

    const onCLick = () => {
        dispatch(fetchUsers(token ?? ""))
    }

    if (countUser === 0 && !isError) return null

    return (<IconButton onClick={onCLick} edge="end" aria-label="delete">
        <RefreshIcon />
    </IconButton>)
}
export default function ButtonLoadUser() {
    const dispatch = useAppDispatch();
    const token = useAuthToken();
    const onCLick = () => {
        dispatch(fetchUsers(token ?? ""))
    }
    return (
        <Box display={"flex"} p={2} justifyContent={"center"}>
            <Button onClick={onCLick} variant={"contained"} sx={{ alignContent: "center", alignSelf: "center" }}>Load Users</Button>
        </Box>

    )
}