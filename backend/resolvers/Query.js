const Query = {
    options(parent, args, { db }, info) {
        if (!args.query) {
          return db.options
        }
    
        return db.options.filter(option => {
          return option.name.toLowerCase().includes(args.query.toLowerCase())
        })
      }  
}

export { Query as default }