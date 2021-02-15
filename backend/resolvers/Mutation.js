
import uuidv4 from 'uuid/v4'

const Mutation = {
  createOption(parents, args, { db }) {

    const option_classification = {
      id: uuidv4(),
      name:args.name,
      type:args.type,
      fabric:args.fabric
    }

    db.options.push(option_classification)

    return option_classification
  },

  updateOption(parent, args, { db }) {
    const { id, name, type, fabric } = args

    const option = db.options.find(option => option.id === id)

    console.log("option: "+option);

    if (!option) {
      throw new Error('User not found')
    }

    if (typeof name === 'string') {
      option.name = name
    }
    else{
      throw new Error("name not found")
    }

    if (typeof type === 'string') {
      option.type = type
    }

    if (typeof fabric === 'string') {
      option.fabric = fabric
    }

    return option
  }
}

export { Mutation as default }