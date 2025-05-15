#pragma once
#ifndef CONSTANTS_H
#define CONSTANTS_H

namespace Constants {
	inline constexpr double gravity{ 9.8 }; // m/s^2
}

double getGravity()
{
	return Constants::gravity;
}

#endif
