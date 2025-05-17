import asyncio
import time


async def display(num):
    await asyncio.sleep(1)
    print(num)


async def main():
    start = time.time()
    async with asyncio.TaskGroup() as tg:
        tasks = [tg.create_task(display(i)) for i in range(1, 10)]
    # tasks = [display(i)for i in range(1, 10)]
    # await asyncio.gather(*tasks)
    end = time.time()
    print(f"{end - start:.3f}s")


if __name__ == "__main__":
    main()
