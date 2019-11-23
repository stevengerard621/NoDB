const entry = [    
    {
    id: 0,
    task: 'do life',
    completed: true
},
{
    id: 1,
    task: 'begin juggling career',
    completed: false
},
{
    id: 2,
    task: 'code for 19 hours',
    completed: true
}];

let id = 3

module.exports = {
    getEntry: (req, res) => {
        console.log('GOT THE GET!')
        res.status(200).send(entry)
    },
    postEntry: (req, res) => {
        console.log('POSTED DEAD OR ALIVE')
        let { task, completed } = req.body;
        entry.push({ id, task, completed });
        id++;
        res.status(200).send(entry)
    },
    editEntry: (req, res) => {
        console.log('SAME SAME BUT DIFFERENT', req.params)
        let {id} = req.params 
        let index = entry.findIndex(element => +id === element.id)
        if(index === -1) res.status(404).send('could not find matching entry')
        entry[index].completed = !entry[index].completed
        console.log(entry)
        res.status(200).send(entry)
    },
    deleteEntry: (req, res) => {
        console.log('SHE GONE')
        let deleteId = req.params.id;
        let entryIndex = entry.findIndex(element => element.id == deleteId)

        entry.splice(entryIndex, 1);
        res.status(200).send(entry)
    }
}

// hard code data for 7 days.