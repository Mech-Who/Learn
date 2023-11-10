class Foreigner:
    def __init__(self):
        self.name = "Foreigner"

    def recv_result(self, result: str) -> None:
        print(result)

    def confession(self) -> str:
        pass


class EnglishForeigner(Foreigner):
    def __init__(self):
        super().__init__()
        self.name = "English Foreigner"

    def confession(self) -> str:
        return "I am an English Foreigner"


class AmericanForeigner(Foreigner):
    def __init__(self):
        super().__init__()
        self.name = "American Foreigner"

    def confession(self) -> str:
        return "I am an American Foreigner"


class FranceForeigner(Foreigner):
    def __init__(self):
        super().__init__()
        self.name = "France Foreigner"

    def confession(self) -> str:
        return "I am an France Foreigner"


class Panda:
    def __init__(self):
        self.name = "Panda"

    def recv_message(self, message: str) -> None:
        print(message)

    def send_message(self) -> str:
        return "I am a Panda,I won't forgive you"


class AbstractChopper:
    def __init__(self, foreigner: Foreigner, panda: Panda):
        self.name = "Abstract Chopper"
        self.panda = panda
        self.foreigner = foreigner

    def translate_to_panda(self) -> None:
        self.panda.recv_message(self.foreigner.confession())

    def translate_to_foreigner(self) -> None:
        self.foreigner.recv_result(self.foreigner.name + ',' + self.panda.send_message())


class EnglishChopper(AbstractChopper):
    def __init__(self, foreigner: Foreigner, panda: Panda):
        super().__init__(foreigner, panda)
        self.name = "English Chopper"
        self.panda = panda
        self.foreigner = foreigner


class AmericanChopper(AbstractChopper):
    def __init__(self, foreigner: Foreigner, panda: Panda):
        super().__init__(foreigner, panda)
        self.name = "American Chopper"
        self.panda = panda
        self.foreigner = foreigner


class FranceChopper(AbstractChopper):
    def __init__(self, foreigner: Foreigner, panda: Panda):
        super().__init__(foreigner, panda)
        self.name = "France Chopper"
        self.panda = panda
        self.foreigner = foreigner


if __name__ == "__main__":
    panda = Panda()

    eForeigner = EnglishForeigner()
    eChopper = EnglishChopper(eForeigner, panda)
    eChopper.translate_to_panda()
    eChopper.translate_to_foreigner()

    aForeigner = AmericanForeigner()
    aChopper = AmericanChopper(aForeigner, panda)
    aChopper.translate_to_panda()
    aChopper.translate_to_foreigner()

    fForeigner = FranceForeigner()
    fChopper = FranceChopper(fForeigner, panda)
    fChopper.translate_to_panda()
    fChopper.translate_to_foreigner()
