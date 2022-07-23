const getAll = (req, res) => {
    res.send('タスク一覧を取得しました。')   
}

const get = (req, res) => {
    res.send('タスクを取得しました。')
}

const create = (req, res) => {
    res.send('タスクを新規作成しました。')
}

const update = (req, res) => {
    res.send('タスクを更新しました。')
}

const deleteSingle = (req, res) => {
    res.send('タスクを削除しました。')
}

module.exports = {
    getAll,
    get,
    create,
    update,
    deleteSingle,
}