// C++20
#ifndef __LOG_HPP__
#define __LOG_HPP__

#include <string>
#include <source_location>
#include <iostream>

void log(const std::string& mess="",
        const std::source_location loc=std::source_location::current())
{
    std::clog << loc.file_name()
        << "(" << loc.line() << ":" 
        << loc.column() << ") `"
        << loc.function_name() << "`:"
        << mess << std::endl;
}

#endif // __LOG_HPP__