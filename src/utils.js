export const handleLoginChange = ({ target }) => {
    const { name, value } = target
    setLoginInfo({
      ...loginInfo,
      [name]:value,
    })
  }
