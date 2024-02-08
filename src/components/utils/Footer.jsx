import React from 'react'

const  Footer= () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-sm">&copy; 2024 Cinesur CJ</div>
            <div className="text-sm">
            <a href="#" className="mr-4">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
            </div>
        </div>
        </footer>

    </div>
  )
}

export default Footer