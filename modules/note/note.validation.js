import joi from "joi";

export const addNoteSchema={
    body:joi.object().required().keys({
        title:joi.string().required(),
        content:joi.string().required(),

    }),
    headers:joi.object().required().keys({
        authorization:joi.string().required()
    }
    ).unknown(true)
}



export const updateNoteSchema={
    body:joi.object().required().keys({
        title:joi.string().required(),
        content:joi.string().required(),

    }),
    headers:joi.object().required().keys({
        authorization:joi.string().required()
    }
    ).unknown(true)
}


export const deleteNoteSchema={
    headers:joi.object().required().keys({
        authorization:joi.string().required()
    }
    ).unknown(true)
}

export const getNoteByIdSchema={
    headers:joi.object().required().keys({
        authorization:joi.string().required()
    }
    ).unknown(true)
}




export const SearchNoteSchema={
    headers:joi.object().required().keys({
        authorization:joi.string().required()
    }
    ).unknown(true)
}

export const getNotesSchema={
    headers:joi.object().required().keys({
        authorization:joi.string().required()
    }
    ).unknown(true)
}