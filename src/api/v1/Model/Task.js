const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "タスク名を入力してください。"],
        trim: true, // 空白削除
        maxlength: [20, "タスク名は20文字以内で入力してください"]
    },
    completed: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("Task", TaskSchema);