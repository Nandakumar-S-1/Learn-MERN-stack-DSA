class CustomError extends Error{
    constructor(err){
        super(err)
        this.name = 'CustomError'
        this.message='Random Error message created using CustomError'
    }
}

throw new CustomError('This is a custom Error')