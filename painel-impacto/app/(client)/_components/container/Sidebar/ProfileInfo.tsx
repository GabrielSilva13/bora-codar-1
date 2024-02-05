export function ProfileInfo() {
  // function getInitials(name: string) {
  //   const words = name.split(' ')

  //   const initials = words.map((word) => word[0].toUpperCase())

  //   return initials.slice(0, 2).join('')
  // }

  // console.log(getInitials('Daniel Gomes de Souza'))
  // Vou deixar essa função acima caso precisem de um limitador de palavras para o perfil

  return (
    <div className="w-full flex-grow text-bx-white-100 flex mt-4 justify-center md:justify-start items-end gap-4">
      <div className="md:flex flex-col hidden">
        <strong className="font-medium">Daniel</strong>
        <span className="text-sm">hello@email.com</span>
      </div>
    </div>
  )
}
