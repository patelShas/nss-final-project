import { createSlice } from "@reduxjs/toolkit";
import {
    createReviewThunk,
    deleteReviewThunk,
    findReviewByAlbumThunk,
    findReviewByUserThunk,
    updateReviewThunk
} from "./review-thunks";

const initialState = {
    reviews: [],
    loading: true
}


const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [findReviewByAlbumThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewByAlbumThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewByAlbumThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [findReviewByUserThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewByUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewByUserThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews
                    .filter(rev => rev._id !== payload)
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const reviewNdx = state.reviews
                    .findIndex((rev) => rev._id === payload._id)
                state.reviews[reviewNdx] = {
                    ...state.reviews[reviewNdx],
                    ...payload
                }
            }


    },
    reducers: {
        addReview(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                ...action.payload,
            });
        },
        deleteReview(state, action) {
            const index = state
                .findIndex(review =>
                    review._id === action.payload);
            state.splice(index, 1);
        },
        incrementLikes(state, action) {
            const review = state
                .find((review) =>
                    review._id === action.payload)
            review.likes += 1
        },
    }

});

export const {addReview, deleteReview, incrementLikes} = reviewsSlice.actions
export default reviewsSlice.reducer;